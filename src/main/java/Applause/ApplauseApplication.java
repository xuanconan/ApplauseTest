package Applause;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import Applause.dao.ViewDao;

@SpringBootApplication
public class ApplauseApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApplauseApplication.class, args);
		ViewDao.getInstance().findAllRows();
	}
	

}
