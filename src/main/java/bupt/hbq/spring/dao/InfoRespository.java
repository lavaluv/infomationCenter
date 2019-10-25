package bupt.hbq.spring.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import bupt.hbq.spring.objects.info.Info;

@RepositoryRestResource
@CrossOrigin(origins = "http://localhost:4200")
public interface InfoRespository extends JpaRepository<Info, Long> {
	List<Info> findByTimeGreaterThan(String time);
}