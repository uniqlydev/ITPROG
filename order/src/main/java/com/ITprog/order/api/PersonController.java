package com.ITprog.order.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ITprog.order.model.Customer;
import com.ITprog.order.service.CustomerService;

@RequestMapping("api/v1/customer")

@RestController
public class PersonController {
    
    private final CustomerService customerService;
    
    @Autowired
    public PersonController(CustomerService customerService) {
        this.customerService = customerService;
    }


    @PostMapping
    public void addCustomer(@RequestBody Customer customer) {
        customerService.addCustomer(customer);
    }


    @GetMapping
    public List<Customer> getAllCustomers() {
        return customerService.getAllCustomers();
    }

}
