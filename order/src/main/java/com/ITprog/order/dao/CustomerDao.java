package com.ITprog.order.dao;

import java.util.List;
import java.util.UUID;

import com.ITprog.order.model.Customer;

public interface CustomerDao {
    
    boolean insertCustomer(UUID id, Customer customer);


    default boolean insertCustomer(Customer customer) {
        UUID id = UUID.randomUUID();
        return insertCustomer(id, customer);
    }

    List<Customer> selectAllCustomers();
}
