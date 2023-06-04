package com.ITprog.order.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Repository;

import com.ITprog.order.model.Customer;

@Repository("serverDao")
public class ServerCustomerDataAccessService implements CustomerDao{

    private static List<Customer> DB = new ArrayList<Customer>();

    @Override
    public boolean insertCustomer(UUID id, Customer customer) {
        DB.add(new Customer(id, customer.getMeal()[0], customer.getMeal()[1], customer.getMeal()[2]));
        return true;
    }

    @Override
    public List<Customer> selectAllCustomers() {
        return DB;
    }

    
    
}
