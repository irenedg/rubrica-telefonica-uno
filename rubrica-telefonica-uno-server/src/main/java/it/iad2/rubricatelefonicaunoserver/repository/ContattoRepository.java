package it.iad2.rubricatelefonicaunoserver.repository;

import it.iad2.rubricatelefonicaunoserver.model.Contatto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContattoRepository extends JpaRepository<Contatto,Long> {
}
