package com.huawei.imc.controller;

import java.util.HashMap;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/windchill")
public class WindchillDataController {
	private static final Logger logger = Logger.getLogger(WindchillDataController.class);

	@RequestMapping(value = "/test", method = RequestMethod.GET)
	public @ResponseBody Map<String, Object> getCloudInterpriseData() {
		logger.debug("test for windchill");
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("hello", "windchill");
		return result;
	}
}
