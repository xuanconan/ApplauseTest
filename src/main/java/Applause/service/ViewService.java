package Applause.service;

import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import Applause.dao.ViewDao;
import Applause.model.ViewModel;


@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class ViewService {
	/**
	 * Find all rows for the tester_matching
	 * 
	 * @return List of all the tester_matching rows in the database view
	 */
	@RequestMapping(value = {"/api/allmatches"} , method = RequestMethod.GET)
	public @ResponseBody List<ViewModel> selectAllCourses() {
		ViewDao vdao = ViewDao.getInstance();
		return (List<ViewModel>) vdao.findAllRows();
	}
	
}
