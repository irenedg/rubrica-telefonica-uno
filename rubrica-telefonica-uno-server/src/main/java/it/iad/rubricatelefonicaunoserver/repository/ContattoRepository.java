package it.iad.rubricatelefonicaunoserver.repository;

import it.iad.rubricatelefonicaunoserver.model.Contatto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContattoRepository extends JpaRepository<Contatto, Long> {

}
