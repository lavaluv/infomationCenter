package bupt.hbq.spring.service;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.jpa.domain.Specification;

import bupt.hbq.spring.objects.dns.DomainDetectResult;

public class DNSSerch {
	public static Specification<DomainDetectResult> queryDomainListByDomainDetectResult(DomainDetectResult domainDetectResult,String fromTime,String toTime){
		return new Specification<DomainDetectResult>() {
			/**
			 * 
			 */
			private static final long serialVersionUID = 1L;

			@Override
			public Predicate toPredicate(Root<DomainDetectResult> root,CriteriaQuery<?> query,
					CriteriaBuilder builder) {
				List<Predicate> predicates = new ArrayList<Predicate>();
				String cityString = domainDetectResult.getCitylist();
				String ipString = domainDetectResult.getIp();
				String srcIpString = domainDetectResult.getSrcIplist();
				String desIpString = domainDetectResult.getDesIplist();
				String hostName = domainDetectResult.getDomain();
				if (fromTime != null & fromTime != "") {
					predicates.add(builder.between(root.get("detectTime"), fromTime, toTime));
				}
				if (cityString != null && cityString != "") {
					predicates.add(builder.like(root.get("citylist"), "%" + cityString + "%"));
				}
				if (ipString != null && ipString != "") {
					predicates.add(builder.like(root.get("ip"), "%" + ipString + "%"));
				}
				if (srcIpString != null && srcIpString != "") {
					predicates.add(builder.like(root.get("srcIplist"), "%" + srcIpString + "%"));
				}
				if (desIpString != null && desIpString != "") {
					predicates.add(builder.like(root.get("desIplist"), "%" + desIpString + "%"));
				}
				if (hostName != null && hostName != "") {
					predicates.add(builder.like(root.get("domain"), "%" + hostName + "%"));
				}
				Predicate[] predicateAll = new Predicate[predicates.size()];
				return builder.and(predicates.toArray(predicateAll));
			}
		};
	}
}
