package Applause.dao;

import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collection;

import Applause.model.ViewModel;

public class ViewDao extends CommonDao {
	
	public static ViewDao instance = null;
	public static ViewDao getInstance() {
		if (instance == null) {
			instance = new ViewDao();
		}
		return instance;
	}
	public ViewDao() {};
	
	public Collection<ViewModel> findAllRows() {
		Collection<ViewModel> rows = new ArrayList<ViewModel>();
		
		try {
			Class.forName(JDBC_DRIVER);
			connection = DriverManager.getConnection(DB_URL, USERNAME, PASSWORD);
			
			String FIND_ALL_ROWS = "SELECT * FROM tester_matching";
			prepStatement = connection.prepareStatement(FIND_ALL_ROWS);
			
			ResultSet results = prepStatement.executeQuery();
			
			while(results.next()) {
//				int id = results.getInt("matching_id");
				int testerId = results.getInt("testerId");
				String firstName = results.getString("firstName");
				String lastName = results.getString("lastName");
				String country = results.getString("country");
				int deviceId = results.getInt("deviceId");
				String description = results.getString("description");
				int device_bug = results.getInt("device_bug");
				
				ViewModel viewRow = new ViewModel(testerId, firstName, lastName, country, deviceId, description, device_bug);
				                
				rows.add(viewRow);
			}
			
			for(ViewModel tmv : rows) {
				System.out.println(tmv.getTesterId() + " " + tmv.getFirstName() + " " + tmv.getLastName() + " " + tmv.getCountry() 
				+ " " + tmv.getDeviceId() + " " + tmv.getDescription() + " " + tmv.getDevice_bug());
			}
		
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				prepStatement.close();
				connection.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return rows;
	}
	
	

}
