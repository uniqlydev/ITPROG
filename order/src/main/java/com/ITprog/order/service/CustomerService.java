package com.ITprog.order.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.ITprog.order.dao.CustomerDao;
import com.ITprog.order.model.Customer;


@Service
public class CustomerService {

    private final CustomerDao customerDao;

    @Autowired
    public CustomerService(@Qualifier("serverDao")CustomerDao customerDao) {
        this.customerDao = customerDao;
    }
    
    public boolean addCustomer(Customer customer) {
        return customerDao.insertCustomer(customer);
    }
    
    public List<Customer> getAllCustomers() {
        return customerDao.selectAllCustomers();
    }

}
