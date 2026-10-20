package com.certverify.backend

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

data class LoginRequest(val username: String = "", val password: String = "")

data class LoginResponse(val token: String, val username: String, val role: String)

@RestController
@RequestMapping("/api/auth")
class AuthController(
    private val userStore: UserStore,
    private val passwordEncoder: PasswordEncoder,
    private val jwtService: JwtService
) {

    // POST /api/auth/login -> returns a JWT when the credentials are correct
    @PostMapping("/login")
    fun login(@RequestBody request: LoginRequest): ResponseEntity<Any> {
        val user = userStore.find(request.username)
        if (user == null || !passwordEncoder.matches(request.password, user.passwordHash)) {
            return ResponseEntity
                .status(HttpStatus.UNAUTHORIZED)
                .body(mapOf("error" to "Invalid username or password"))
        }
        val token = jwtService.generateToken(user.username, user.role)
        return ResponseEntity.ok(LoginResponse(token, user.username, user.role))
    }
}
