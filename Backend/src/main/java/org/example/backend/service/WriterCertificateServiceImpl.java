package org.example.backend.service;

import org.example.backend.model.WriterCertificate;
import org.example.backend.Repositories.WriterCertificateRepository;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
public class WriterCertificateServiceImpl implements WriterCertificateService {

    private final WriterCertificateRepository writerCertificateRepository;

    public WriterCertificateServiceImpl(WriterCertificateRepository writerCertificateRepository) {
        this.writerCertificateRepository = writerCertificateRepository;
    }

    @Override
    public WriterCertificate validateCode(String code) {
        WriterCertificate certificate = writerCertificateRepository.findByCode(code)
                .orElseThrow(() -> new IllegalArgumentException("Invalid certificate code"));
        if (certificate.isUsed()) {
            throw new IllegalArgumentException("Certificate code already used");
        }
        certificate.setUsed(true);
        certificate.setUsedAt(Instant.now());
        return writerCertificateRepository.save(certificate);
    }
}