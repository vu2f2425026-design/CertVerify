package com.certverify.backend

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.validation.constraints.NotBlank
import java.time.LocalDate

@Entity
class Certificate(

    // Matches your existing IDs like "CERT-2025-0417" — used as the primary key
    // directly instead of an auto-generated number, since your frontend/QR flow
    // already treats this string as the certificate's identity.
    @Id
    @Column(name = "cert_id")
    var certId: String = "",

    @field:NotBlank
    var studentName: String = "",

    var institution: String = "",

    @field:NotBlank
    var course: String = "",

    var grade: String = "",

    var issueDate: LocalDate = LocalDate.now(),

    // Kept as a plain String for now (Verified / Pending / Revoked / VALID),
    // matching the exact values already used in staticData.js. Worth revisiting
    // as an enum once the status values are finalized — a typo in a raw string
    // here won't be caught at compile time the way an enum would.
    var status: String = "Pending"
)
