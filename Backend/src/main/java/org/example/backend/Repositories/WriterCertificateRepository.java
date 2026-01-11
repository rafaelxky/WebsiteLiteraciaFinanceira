package org.example.backend.Repositories;

import org.example.backend.model.WriterCertificate;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface WriterCertificateRepository extends JpaRepository<WriterCertificate, Long> {

    Optional<WriterCertificate> findByCode(String code);
}
