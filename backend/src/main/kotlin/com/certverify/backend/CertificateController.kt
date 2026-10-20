package com.certverify.backend
import jakarta.validation.Valid
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
@RestController
@RequestMapping("/api/certificates")
class CertificateController(
    private val certificateRepository: CertificateRepository
) {
    // GET /api/certificates  -> list all certificates
    @GetMapping
    fun getAllCertificates(): List<Certificate> =
        certificateRepository.findAll()
    // GET /api/certificates/{id}  -> verify one certificate by ID
    @GetMapping("/{id}")
    fun getCertificateById(@PathVariable id: String): ResponseEntity<Certificate> {
        val certificate = certificateRepository.findById(id)
        return if (certificate.isPresent) {
            ResponseEntity.ok(certificate.get())
        } else {
            ResponseEntity.status(HttpStatus.NOT_FOUND).build()
        }
    }
    // POST /api/certificates  -> issue a new certificate
    @PostMapping
    fun createCertificate(@Valid @RequestBody certificate: Certificate): ResponseEntity<Certificate> {
        val saved = certificateRepository.save(certificate)
        return ResponseEntity.status(HttpStatus.CREATED).body(saved)
    }
    // PATCH /api/certificates/{id}/revoke  -> update status to Revoked
    @PatchMapping("/{id}/revoke")
    fun revokeCertificate(@PathVariable id: String): ResponseEntity<Certificate> {
        val certificate = certificateRepository.findById(id)
        return if (certificate.isPresent) {
            val cert = certificate.get()
            cert.status = "Revoked"
            ResponseEntity.ok(certificateRepository.save(cert))
        } else {
            ResponseEntity.status(HttpStatus.NOT_FOUND).build()
        }
    }
    // DELETE /api/certificates/{id}  -> remove a certificate
    @DeleteMapping("/{id}")
    fun deleteCertificate(@PathVariable id: String): ResponseEntity<Void> {
        return if (certificateRepository.existsById(id)) {
            certificateRepository.deleteById(id)
            ResponseEntity.noContent().build()
        } else {
            ResponseEntity.status(HttpStatus.NOT_FOUND).build()
        }
    }
}
