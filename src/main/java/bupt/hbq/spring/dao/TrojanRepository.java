package bupt.hbq.spring.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import bupt.hbq.spring.objects.trojan.Trojan;

@RepositoryRestResource
@CrossOrigin(origins = {"http://localhost:4200","http://localhost:63342"})
public interface TrojanRepository extends JpaRepository<Trojan, Long>,JpaSpecificationExecutor<Trojan>,CrudRepository<Trojan, Long>{
	Trojan findFirst1ByTimeGreaterThan(String time,Sort sort);
	List<Trojan> findByTime(String time);
	Page<Trojan> findByTimeGreaterThan(String time,Pageable pageable);
	Page<Trojan> findByTimeGreaterThanAndSrcIP(String time,String srcIP,Pageable pageable);
	Page<Trojan> findByTimeGreaterThanAndDesIP(String time,String desIP,Pageable pageable);
	Page<Trojan> findByTimeGreaterThanAndSrcPort(String time,int srcPort,Pageable pageable);
	Page<Trojan> findByTimeGreaterThanAndDesPort(String time,int desPort,Pageable pageable);
	Page<Trojan> findByTimeGreaterThanAndThreatLevel(String time,int threatLevel,Pageable pageable);
	Page<Trojan> findByTimeGreaterThanAndType(String time,String type,Pageable pageable);
	Page<Trojan> findByTimeGreaterThanAndProtocol(String time,String protocol,Pageable pageable);
	@Query(value = "select t.srcPort,count(t.srcPort) as c from Trojan t group by srcPort order by c desc")
	Page<Object[]> findsrcPortCount(Pageable pageable);
	@Query(value = "select t.desPort,count(t.desPort) as c from Trojan t group by desPort order by c desc")
	Page<Object[]> finddesPortCount(Pageable pageable);
	int countByTimeAndThreatLevel(String time,int threatLevel);
}
