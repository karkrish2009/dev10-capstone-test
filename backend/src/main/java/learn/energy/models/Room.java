package learn.energy.models;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // autoincrement
    private int roomId;
    private String roomName;
    private String roomDescription;
    private String imageUrl;
    private float length;
    private float breadth;
    private float height;
    private float xCoord;
    private float yCoord;
    private int houseId;

    private Room() {
    }

    public Room(int roomId, String roomName, String roomDescription, String imageUrl,
                float length, float breadth, float height, float xCoord, float yCoord, int houseId) {
        this.roomId = roomId;
        this.roomName = roomName;
        this.roomDescription = roomDescription;
        this.imageUrl = imageUrl;
        this.length = length;
        this.breadth = breadth;
        this.height = height;
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.houseId = houseId;
    }

    public int getRoomId() {
        return roomId;
    }

    public void setRoomId(int roomId) {
        this.roomId = roomId;
    }

    public String getRoomName() {
        return roomName;
    }

    public void setRoomName(String roomName) {
        this.roomName = roomName;
    }

    public String getRoomDescription() {
        return roomDescription;
    }

    public void setRoomDescription(String roomDescription) {
        this.roomDescription = roomDescription;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public float getLength() {
        return length;
    }

    public void setLength(float length) {
        this.length = length;
    }

    public float getBreadth() {
        return breadth;
    }

    public void setBreadth(float breadth) {
        this.breadth = breadth;
    }

    public float getHeight() {
        return height;
    }

    public void setHeight(float height) {
        this.height = height;
    }

    public float getxCoord() {
        return xCoord;
    }

    public void setxCoord(float xCoord) {
        this.xCoord = xCoord;
    }

    public float getyCoord() {
        return yCoord;
    }

    public void setyCoord(float yCoord) {
        this.yCoord = yCoord;
    }

    public int getHouseId() {
        return houseId;
    }

    public void setHouseId(int houseId) {
        this.houseId = houseId;
    }
}
