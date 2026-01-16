package org.example.backend.service;

import org.example.backend.model.WriterCertificate;

public interface WriterCertificateService {
    WriterCertificate validateCode(String code);
}
