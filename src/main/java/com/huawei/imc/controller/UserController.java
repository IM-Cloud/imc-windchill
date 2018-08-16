/**
 * 
 */
package com.huawei.imc.controller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.jasig.cas.client.authentication.AttributePrincipal;
import org.jasig.cas.client.validation.AssertionImpl;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @author dengshaolin
 *
 */
@RestController
@RequestMapping(value = "/user")
public class UserController {
	private static final Logger logger = Logger.getLogger(UserController.class);

	private static final String CONST_CAS_ASSERTION = "_const_cas_assertion_";
	private static final String KEY_USER_ID = "id";
	private static final String KEY_USER_NAME = "name";

	@SuppressWarnings({ "deprecation", "unchecked" })
	@RequestMapping(value = "/me", method = RequestMethod.GET)
	public @ResponseBody Map<String, Object> me(HttpServletRequest request, HttpServletResponse response) {
		HttpSession session = request.getSession();
		AssertionImpl i = (AssertionImpl) (session.getAttribute(CONST_CAS_ASSERTION));
		if (null == i) {
			logger.error("AssertionImpl is null");
			response.setStatus(HttpStatus.UNAUTHORIZED.value(), "invalid AssertionImpl");
			return null;
		}
		AttributePrincipal principal = i.getPrincipal();
		if (null == principal) {
			logger.error("AttributePrincipal is null");
			response.setStatus(HttpStatus.UNAUTHORIZED.value(), "invalid AttributePrincipal");
			return null;
		}
		Map<String, Object> userInfo = principal.getAttributes();
		String name = principal.getName();
		if (!userInfo.containsKey(KEY_USER_ID)) {
			userInfo.put(KEY_USER_ID, name);
		}
		if (!userInfo.containsKey(KEY_USER_NAME)) {
			userInfo.put(KEY_USER_NAME, name);
		}
		return userInfo;
	}
}
