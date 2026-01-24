package org.example.backend.services;

import org.example.backend.models.WriterCertificate;

public interface WriterCertificateService {
    WriterCertificate validateCode(String code);
}
