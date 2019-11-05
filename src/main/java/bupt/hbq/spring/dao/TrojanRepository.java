package bupt.hbq.spring.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import bupt.hbq.spring.objects.Trojan;

@RepositoryRestResource
@CrossOrigin(origins = "http://localhost:4200")
public interface TrojanRepository extends JpaRepository<Trojan, Long>,JpaSpecificationExecutor<Trojan>{
	Page<Trojan> findByTimeGreaterThan(String time,Pageable pageable);
	Page<Trojan> findByTimeGreaterThanAndSrcIP(String time,String srcIP,Pageable pageable);
	Page<Trojan> findByTimeGreaterThanAndDesIP(String time,String desIP,Pageable pageable);
	Page<Trojan> findByTimeGreaterThanAndSrcPort(String time,int srcPort,Pageable pageable);
	Page<Trojan> findByTimeGreaterThanAndDesPort(String time,int desPort,Pageable pageable);
	Page<Trojan> findByTimeGreaterThanAndThreatLevel(String time,int threatLevel,Pageable pageable);
	Page<Trojan> findByTimeGreaterThanAndType(String time,String type,Pageable pageable);
	Page<Trojan> findByTimeGreaterThanAndProtocol(String time,String protocol,Pageable pageable);
}
