package com.certverify.backend

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface CertificateRepository : JpaRepository<Certificate, String>
// JpaRepository<Certificate, String> — String because certId (the primary key) is a String,
// not a Long like most tutorials assume. This one interface gives you save(), findById(),
// findAll(), deleteById(), etc. for free — no method bodies needed.
