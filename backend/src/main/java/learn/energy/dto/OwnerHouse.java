package learn.energy.dto;

import jakarta.persistence.Entity;
import learn.energy.models.Homeowner;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class OwnerHouse {

    private Homeowner homeowner;
}
