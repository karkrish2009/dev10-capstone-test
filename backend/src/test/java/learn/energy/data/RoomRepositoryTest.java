package learn.energy.data;

import com.mysql.cj.x.protobuf.MysqlxPrepare;
import learn.energy.models.Room;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class RoomRepositoryTest {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Autowired
    RoomRepository repository;

    @BeforeEach
    void setup() {
        jdbcTemplate.update("call set_known_good_state();");
    }

    @Test
    void shouldFindTwoRooms() {
        List<Room> actual = repository.findAll();
        assertEquals(2, actual.size());
    }

    /*
    @Test
    void shouldFindOneRoom() {
        List<Room> actual = repository.findByHouseId(2);
        assertEquals(1, actual.size());
    }

     */



}