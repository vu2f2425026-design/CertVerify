package com.certverify.backend

import java.time.LocalDate

// Custom exception for invalid certificate data
class InvalidCertificateException(message: String) : Exception(message)

private data class CertRecord(
    val certId: String,
    val studentName: String,
    val course: String,
    val grade: String,
    val issueDate: LocalDate,
    val status: String
)

private val certificates = listOf(
    CertRecord("CERT-2025-0417", "Aditi Sahu", "B.E. Computer Engineering",
        "A", LocalDate.of(2025, 6, 15), "Verified"),
    CertRecord("CERT-2025-0418", "Rahul Verma", "B.E. Information Technology",
        "A+", LocalDate.of(2025, 6, 15), "Verified"),
    CertRecord("CERT-2025-0419", "Sneha Patil", "B.E. Electronics",
        "B+", LocalDate.of(2025, 5, 20), "Revoked"),
    CertRecord("CERT-2025-0420", "Karan Mehta", "B.E. Mechanical",
        "B", LocalDate.of(2025, 6, 18), "Pending")
)

private fun gradeToPoints(grade: String): Int = when (grade) {
    "O" -> 10
    "A+" -> 9
    "A" -> 8
    "B+" -> 7
    "B" -> 6
    else -> throw IllegalArgumentException("Unknown grade: $grade")
}

private fun validate(cert: CertRecord) {
    if (cert.certId.isBlank()) throw InvalidCertificateException("Certificate ID cannot be blank")
    if (cert.studentName.isBlank()) throw InvalidCertificateException("Student name cannot be blank")
    if (cert.issueDate.isAfter(LocalDate.now())) {
        throw InvalidCertificateException("Issue date cannot be in the future")
    }
}

private fun findById(id: String): CertRecord =
    certificates.firstOrNull { it.certId == id }
        ?: throw NoSuchElementException("Certificate $id not found")

fun main() {
    println("===== Part A: Collection Operations =====")

    val names = certificates.map { it.studentName }
    println("All students   : $names")

    val verified = certificates.filter { it.status == "Verified" }
    println("Verified certs : ${verified.map { it.certId }}")

    val points = certificates.map { gradeToPoints(it.grade) }
    println("Grade points   : $points")

    val totalPoints = points.reduce { acc, p -> acc + p }
    println("Total points   : $totalPoints")
    println("Average points : ${totalPoints.toDouble() / points.size}")

    val byStatus = certificates.groupBy { it.status }.mapValues { it.value.size }
    println("Count by status: $byStatus")

    val topper = certificates.maxByOrNull { gradeToPoints(it.grade) }
    println("Top grade      : ${topper?.studentName} (${topper?.grade})")

    println()
    println("===== Part B: Exception Handling =====")

    val bad = CertRecord("CERT-2025-0999", "", "B.E. Civil", "A", LocalDate.of(2025, 6, 1), "Pending")
    try {
        validate(bad)
        println("Validation passed")
    } catch (e: InvalidCertificateException) {
        println("Caught InvalidCertificateException: ${e.message}")
    }

    try {
        findById("CERT-9999")
    } catch (e: NoSuchElementException) {
        println("Caught NoSuchElementException: ${e.message}")
    }

    try {
        gradeToPoints("Z")
    } catch (e: IllegalArgumentException) {
        println("Caught IllegalArgumentException: ${e.message}")
    } finally {
        println("finally block executed: cleanup done")
    }
}
