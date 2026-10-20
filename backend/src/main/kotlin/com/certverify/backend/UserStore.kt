package com.certverify.backend

import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Component

// Demo users kept in memory (a real system would load these from the database)
@Component
class UserStore(passwordEncoder: PasswordEncoder) {

    data class AppUser(val username: String, val passwordHash: String, val role: String)

    private val users: Map<String, AppUser> = listOf(
        AppUser("admin", passwordEncoder.encode("admin123")!!, "ADMIN"),
        AppUser("student", passwordEncoder.encode("student123")!!, "STUDENT")
    ).associateBy { it.username }

    fun find(username: String): AppUser? = users[username]
}
