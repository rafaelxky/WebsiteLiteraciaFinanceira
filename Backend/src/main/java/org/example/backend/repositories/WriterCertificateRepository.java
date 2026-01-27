package org.example.backend.repositories;

import org.example.backend.models.WriterCertificate;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface WriterCertificateRepository extends JpaRepository<WriterCertificate, Long> {

    Optional<WriterCertificate> findByCode(String code);
}
