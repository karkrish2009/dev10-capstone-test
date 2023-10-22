package learn.energy.models;

import jakarta.persistence.*;

import java.util.List;
import java.util.Objects;



@Entity
public class House {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int houseId;
    private String streetAddress;
    private String city;
    private int zipCode;
    private int ownerId;
    @OneToMany(targetEntity = Room.class, cascade = CascadeType.ALL)
    @JoinColumn (name = "houseId", referencedColumnName = "houseId")
    private List<Room> rooms;

    public House() {

    }

    public House(int houseId, String streetAddress, String city, int zipCode, int ownerId,
                 List<Room> rooms) {
        this.houseId = houseId;
        this.streetAddress = streetAddress;
        this.city = city;
        this.zipCode = zipCode;
        this.ownerId = ownerId;
        this.rooms = rooms;
    }

    public int getHouseId() {
        return houseId;
    }

    public void setHouseId(int houseId) {
        this.houseId = houseId;
    }

    public String getStreetAddress() {
        return streetAddress;
    }

    public void setStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public int getZipCode() {
        return zipCode;
    }

    public void setZipCode(int zipCode) {
        this.zipCode = zipCode;
    }

    public int getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(int ownerId) {
        this.ownerId = ownerId;
    }

    public List<Room> getRooms() {
        return rooms;
    }

    public void setRooms(List<Room> rooms) {
        this.rooms = rooms;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof House)) return false;
        House house = (House) o;
        return getHouseId() == house.getHouseId() && getZipCode() == house.getZipCode() &&
                getOwnerId() == house.getOwnerId() &&
                getStreetAddress().equals(house.getStreetAddress()) &&
                getCity().equals(house.getCity()) && getRooms().equals(house.getRooms());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getHouseId(), getStreetAddress(), getCity(), getZipCode(),
                getOwnerId(), getRooms());
    }

    @Override
    public String toString() {
        return "House{" +
                "houseId=" + houseId +
                ", streetAddress='" + streetAddress + '\'' +
                ", city='" + city + '\'' +
                ", zipCode=" + zipCode +
                ", ownerId=" + ownerId +
                ", rooms=" + rooms +
                '}';
    }
}
