package bupt.hbq.spring.service;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.jpa.domain.Specification;

import bupt.hbq.spring.objects.Trojan;

public class TrojanSerch {
	public static Specification<Trojan> queryTrojanListByTrojan(Trojan trojan,String fromTime,String toTime){
		return new Specification<Trojan>() {
			/**
			 * 
			 */
			private static final long serialVersionUID = 1L;

			@Override
			public Predicate toPredicate(Root<Trojan> root,CriteriaQuery<?> query,
					CriteriaBuilder builder) {
				List<Predicate> predicates = new ArrayList<Predicate>();
				String srcIP = trojan.getSrcIP();
				int srcPort = trojan.getSrcPort();
				String desIP = trojan.getDesIP();
				int desPort = trojan.getDesPort();
				String protocol = trojan.getProtocol();
				String type = trojan.getType();
				int threatLevel = trojan.getThreatLevel();
				String info = trojan.getInfo();
				if (fromTime != null & fromTime != "") {
					predicates.add(builder.between(root.get("time"), fromTime, toTime));
				}
				if (srcIP != null & srcIP != "") {
					predicates.add(builder.equal(root.get("srcIP"), srcIP));
				}
				if (srcPort != -1) {
					predicates.add(builder.equal(root.get("srcPort"), srcPort));
				}
				if (desIP != null & desIP != "") {
					predicates.add(builder.equal(root.get("desIP"), desIP));
				}
				if (desPort != -1) {
					predicates.add(builder.equal(root.get("desPort"), desPort));
				}
				if (protocol != null & protocol != "") {
					predicates.add(builder.equal(root.get("protocol"), protocol));
				}
				if (type != null & type != "") {
					predicates.add(builder.equal(root.get("type"), type));
				}
				if (threatLevel != -1) {
					predicates.add(builder.equal(root.get("threatLevel"), threatLevel));
				}
				if (info != null & info != "") {
					predicates.add(builder.like(root.get("info"), "%"+info+"%"));
				}
				System.out.println(predicates.toString());
				Predicate[] predicateAll = new Predicate[predicates.size()];
				return builder.and(predicates.toArray(predicateAll));
			}
		};
	}
}
