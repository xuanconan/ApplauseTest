package Applause.model;

import javax.persistence.Column;
import javax.persistence.Id;

public class ViewModel {

	private Long uniqueId;
	private int testerId;
	private String firstName;
	private String lastName;
	private String country;
	private int deviceId;
	private String description;
	private int device_bug;
	
	public ViewModel(Long uniqueId, int testerId, String firstName, String lastName, String country, int deviceId,
			String description, int device_bug) {
		super();
		this.uniqueId = uniqueId;
		this.testerId = testerId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.country = country;
		this.deviceId = deviceId;
		this.description = description;
		this.device_bug = device_bug;
	}
	
	public ViewModel(int testerId, String firstName, String lastName, String country, int deviceId,
			String description, int device_bug) {
		super();
		this.testerId = testerId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.country = country;
		this.deviceId = deviceId;
		this.description = description;
		this.device_bug = device_bug;
	}

	public Long getUniqueId() {
		return uniqueId;
	}

	public int getTesterId() {
		return testerId;
	}

	public String getFirstName() {
		return firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public String getCountry() {
		return country;
	}

	public int getDeviceId() {
		return deviceId;
	}

	public String getDescription() {
		return description;
	}

	public int getDevice_bug() {
		return device_bug;
	}
	
	
	
	
}
