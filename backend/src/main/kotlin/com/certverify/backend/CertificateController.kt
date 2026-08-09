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

    // GET /api/certificates
    // Matches: institutionRecords (the full list shown on the Institution dashboard)
    @GetMapping
    fun getAllCertificates(): List<Certificate> =
        certificateRepository.findAll()

    // GET /api/certificates/{id}
    // Matches: the Verification page's "enter a Certificate ID" flow
    @GetMapping("/{id}")
    fun getCertificateById(@PathVariable id: String): ResponseEntity<Certificate> {
        val certificate = certificateRepository.findById(id)
        return if (certificate.isPresent) {
            ResponseEntity.ok(certificate.get())
        } else {
            ResponseEntity.status(HttpStatus.NOT_FOUND).build()
        }
    }

    // POST /api/certificates
    // Matches: Institution dashboard's "Issue New Certificate" action
    @PostMapping
    fun createCertificate(@Valid @RequestBody certificate: Certificate): ResponseEntity<Certificate> {
        val saved = certificateRepository.save(certificate)
        return ResponseEntity.status(HttpStatus.CREATED).body(saved)
    }

    // PATCH /api/certificates/{id}/revoke
    // Matches: Institution dashboard's "Revoke" action
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
}
