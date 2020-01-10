package bupt.hbq.spring.dao;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;

import bupt.hbq.spring.objects.info.Info;

@RepositoryRestResource
@CrossOrigin(origins = {"http://localhost:4200","http://localhost:63342","http://localhost:8080"})
public interface InfoRepository extends JpaRepository<Info, Long> {
	List<Info> findByTime(String time);
	List<Info> findByTimeGreaterThan(String time);
	List<Info> findFirst1ByTimeGreaterThan(String time,Sort sort);
	@Transactional
	@Modifying
	@Query(value = "update Info as i set i.flowNum = ?1,i.packageNum = ?2 where i.time = ?3")
	int updateFlowNumAndPackageNumByTime(long flowNum,long packageNum,String time);
	@Transactional
	@Modifying
	@Query(value = "update Info as i set i.threatNum = ?1,i.notHandleNum = ?2 where i.time = ?3")
	int updateThreatNumAndNotHandleNumByTime(long threatNum,long notHandleNum,String time);
}
