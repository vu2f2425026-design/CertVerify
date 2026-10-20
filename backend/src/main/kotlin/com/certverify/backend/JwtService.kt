package com.certverify.backend
import io.jsonwebtoken.Claims
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.security.Keys
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Service
import java.util.Date
import javax.crypto.SecretKey
@Service
class JwtService(
    @Value("\${jwt.secret:certverify-demo-secret-key-change-me-0123456789}") secret: String,
    @Value("\${jwt.expiry-minutes:60}") private val expiryMinutes: Long
) {
    private val key: SecretKey = Keys.hmacShaKeyFor(secret.toByteArray())
    fun generateToken(username: String, role: String): String {
        val now = Date()
        return Jwts.builder()
            .subject(username)
            .claim("role", role)
            .issuedAt(now)
            .expiration(Date(now.time + expiryMinutes * 60_000))
            .signWith(key)
            .compact()
    }
    fun parse(token: String): Claims =
        Jwts.parser().verifyWith(key).build().parseSignedClaims(token).payload
}
