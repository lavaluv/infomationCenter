package bupt.hbq.spring.dao;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import bupt.hbq.spring.objects.info.DnsInfo;

@RepositoryRestResource
@CrossOrigin(origins = {"http://localhost:4200","http://localhost:63342","http://localhost:8080"})
public interface DnsInfoRepository extends JpaRepository<DnsInfo, Long>{
	List<DnsInfo> findFirst1ByTimeGreaterThan(String time,Sort sort);
}
