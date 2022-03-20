package com.miniproject.books.backend.controller;

import java.util.Collection;
import java.util.Optional;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.miniproject.books.backend.entity.Admin;

public interface IController<T> {

	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<Collection<T>> findAll();
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Optional<T>> findById(@PathVariable Long id);
	
	@RequestMapping(value = "/search/{title}", method = RequestMethod.GET)
	public ResponseEntity<Collection<T>> findByTitle(@PathVariable String title);

	@PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<T> save(@RequestBody T t);
	
	@PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<T> update(@RequestBody T t);
	
	@DeleteMapping("{id}")
	public ResponseEntity<T> deleteById(@PathVariable Long id);
	
	@PostMapping("/authcheck")
	ResponseEntity<Admin> check(@RequestBody Admin admin);

}
