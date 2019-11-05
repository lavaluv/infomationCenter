package bupt.hbq.spring.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import bupt.hbq.spring.objects.TrojanView;

@RepositoryRestResource
@CrossOrigin(origins = "http://localhost:4200")
public interface TrojanViewRepository extends JpaRepository<TrojanView, Long>{
	List<TrojanView> findByTimeGreaterThan(String time);
}
