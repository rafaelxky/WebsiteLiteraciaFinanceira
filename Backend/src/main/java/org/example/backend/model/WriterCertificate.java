package org.example.backend.model;

import jakarta.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "writer_certificates",
        uniqueConstraints = @UniqueConstraint(columnNames = "code"))
public class WriterCertificate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 80)
    private String code; // MVP: código em texto (mais tarde faz hash)

    @Column(nullable = false)
    private boolean used = false;

    @Column(name = "used_at")
    private Instant usedAt;

    public WriterCertificate() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getCode() { return code; }
    public void setCode(String code) { this.code = code; }

    public boolean isUsed() { return used; }
    public void setUsed(boolean used) { this.used = used; }

    public Instant getUsedAt() { return usedAt; }
    public void setUsedAt(Instant usedAt) { this.usedAt = usedAt; }
}

