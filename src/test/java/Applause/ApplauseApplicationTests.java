package Applause;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import Applause.dao.ViewDao;
import Applause.model.ViewModel;


@RunWith(SpringRunner.class)
@SpringBootTest
public class ApplauseApplicationTests {

	@Test
	public void contextLoads() {
		
        List<ViewModel> rows =  (List<ViewModel>) ViewDao.getInstance().findAllRows();
        
		for(ViewModel tmv : rows) {
			System.out.println(tmv.getTesterId() + " " + tmv.getFirstName() + " " + tmv.getLastName() + " " + tmv.getCountry() 
			+ " " + tmv.getDeviceId() + " " + tmv.getDescription() + " " + tmv.getDevice_bug());
		}
	}

}
