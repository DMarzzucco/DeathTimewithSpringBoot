package personmanager.com.demo.Country.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.stereotype.Service;
import personmanager.com.demo.Country.Model.Country;
import personmanager.com.demo.Country.Reppository.CountryRepository;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

@Service
public class CountryService implements  CountryRepository {
    @Autowired
    private CountryRepository repository;

    @Override
    public void flush() {

    }

    @Override
    public <S extends Country> S saveAndFlush(S entity) {
        return null;
    }

    @Override
    public <S extends Country> List<S> saveAllAndFlush(Iterable<S> entities) {
        return List.of();
    }

    @Override
    public void deleteAllInBatch(Iterable<Country> entities) {

    }

    @Override
    public void deleteAllByIdInBatch(Iterable<Long> longs) {

    }

    @Override
    public void deleteAllInBatch() {

    }

    @Override
    public Country getOne(Long aLong) {
        return null;
    }

    @Override
    public Country getById(Long aLong) {
        return null;
    }

    @Override
    public Country getReferenceById(Long aLong) {
        return null;
    }

    @Override
    public <S extends Country> Optional<S> findOne(Example<S> example) {
        return Optional.empty();
    }

    @Override
    public <S extends Country> List<S> findAll(Example<S> example) {
        return List.of();
    }

    @Override
    public <S extends Country> List<S> findAll(Example<S> example, Sort sort) {
        return List.of();
    }

    @Override
    public <S extends Country> Page<S> findAll(Example<S> example, Pageable pageable) {
        return null;
    }

    @Override
    public <S extends Country> long count(Example<S> example) {
        return 0;
    }

    @Override
    public <S extends Country> boolean exists(Example<S> example) {
        return false;
    }

    @Override
    public <S extends Country, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
        return null;
    }

    @Override
    public <S extends Country> S save(S entity) {
        return null;
    }

    @Override
    public <S extends Country> List<S> saveAll(Iterable<S> entities) {
        return List.of();
    }

    @Override
    public Optional<Country> findById(Long aLong) {
        return Optional.empty();
    }

    @Override
    public boolean existsById(Long aLong) {
        return false;
    }

    @Override
    public List<Country> findAll() {
        return repository.findAll();
    }

    @Override
    public List<Country> findAllById(Iterable<Long> longs) {
        return List.of();
    }

    @Override
    public long count() {
        return 0;
    }

    @Override
    public void deleteById(Long aLong) {

    }

    @Override
    public void delete(Country entity) {

    }

    @Override
    public void deleteAllById(Iterable<? extends Long> longs) {

    }

    @Override
    public void deleteAll(Iterable<? extends Country> entities) {

    }

    @Override
    public void deleteAll() {

    }

    @Override
    public List<Country> findAll(Sort sort) {
        return List.of();
    }

    @Override
    public Page<Country> findAll(Pageable pageable) {
        return null;
    }
}
