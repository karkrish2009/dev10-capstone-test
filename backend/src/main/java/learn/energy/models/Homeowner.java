package learn.energy.models;

import jakarta.persistence.*;

import java.util.List;
import java.util.Objects;


@Entity
public class Homeowner {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ownerId;
    private String ownerFirstName;
    private String ownerLastName;
    private String ownerEmail;
    @OneToMany (targetEntity = House.class,cascade = CascadeType.ALL)
    @JoinColumn (name = "ownerId", referencedColumnName = "ownerId")
    private List<House> houses;

    public Homeowner() {}

    public Homeowner(int ownerId, String ownerFirstName, String ownerLastName,
                     String ownerEmail, List<House> houses) {
        this.ownerId = ownerId;
        this.ownerFirstName = ownerFirstName;
        this.ownerLastName = ownerLastName;
        this.ownerEmail = ownerEmail;
        this.houses = houses;
    }

    public int getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(int ownerId) {
        this.ownerId = ownerId;
    }

    public String getOwnerFirstName() {
        return ownerFirstName;
    }

    public void setOwnerFirstName(String ownerFirstName) {
        this.ownerFirstName = ownerFirstName;
    }

    public String getOwnerLastName() {
        return ownerLastName;
    }

    public void setOwnerLastName(String ownerLastName) {
        this.ownerLastName = ownerLastName;
    }

    public String getOwnerEmail() {
        return ownerEmail;
    }

    public void setOwnerEmail(String ownerEmail) {
        this.ownerEmail = ownerEmail;
    }

    public List<House> getHouses() {
        return houses;
    }

    public void setHouses(List<House> houses) {
        this.houses = houses;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Homeowner)) return false;
        Homeowner homeowner = (Homeowner) o;
        return getOwnerId() == homeowner.getOwnerId() &&
                getOwnerFirstName().equals(homeowner.getOwnerFirstName()) &&
                getOwnerLastName().equals(homeowner.getOwnerLastName()) &&
                getOwnerEmail().equals(homeowner.getOwnerEmail()) &&
                getHouses().equals(homeowner.getHouses());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getOwnerId(), getOwnerFirstName(), getOwnerLastName(),
                getOwnerEmail(), getHouses());
    }
}
