package com.certverify.verification
import org.springframework.beans.factory.annotation.Value
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.client.HttpClientErrorException
import org.springframework.web.client.ResourceAccessException
import org.springframework.web.client.RestClient
// Shape of the JSON returned by the Certificate service
data class CertificateDto(
    val certId: String = "",
    val studentName: String = "",
    val institution: String = "",
    val course: String = "",
    val grade: String = "",
    val issueDate: String = "",
    val status: String = ""
)
// Shape of the answer this service gives to its callers
data class VerificationResult(
    val certId: String,
    val result: String,
    val message: String,
    val studentName: String? = null,
    val institution: String? = null,
    val course: String? = null,
    val issueDate: String? = null
)
@RestController
@RequestMapping("/api/verify")
class VerificationController(
    @Value("\${certificate.service.url:http://localhost:8080}") certificateServiceUrl: String
) {
    // RestClient is used to call the other microservice over REST
    private val client = RestClient.create(certificateServiceUrl)
    // GET /api/verify/{id} -> asks the Certificate service, then decides VALID / REVOKED / PENDING
    @GetMapping("/{id}")
    fun verify(@PathVariable id: String): ResponseEntity<VerificationResult> {
        return try {
            val cert = client.get()
                .uri("/api/certificates/{id}", id)
                .retrieve()
                .body(CertificateDto::class.java)
            if (cert == null) {
                notFound(id)
            } else {
                val result = when (cert.status.lowercase()) {
                    "verified", "valid" -> "VALID"
                    "revoked" -> "REVOKED"
                    else -> "PENDING"
                }
                ResponseEntity.ok(
                    VerificationResult(
                        certId = cert.certId,
                        result = result,
                        message = "Certificate status is ${cert.status}",
                        studentName = cert.studentName,
                        institution = cert.institution,
                        course = cert.course,
                        issueDate = cert.issueDate
                    )
                )
            }
        } catch (e: HttpClientErrorException.NotFound) {
            notFound(id)
        } catch (e: ResourceAccessException) {
            ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).body(
                VerificationResult(id, "UNAVAILABLE", "Certificate service is not reachable")
            )
        }
    }
    private fun notFound(id: String): ResponseEntity<VerificationResult> =
        ResponseEntity.status(HttpStatus.NOT_FOUND).body(
            VerificationResult(id, "NOT_FOUND", "No certificate exists with this ID")
        )
}
