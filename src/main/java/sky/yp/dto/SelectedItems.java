package sky.yp.dto;


import lombok.*;

import java.util.List;
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class SelectedItems {
    private List<AttractionDto> attractions;
    private List<HotelDto> hotels;
    private List<RestaurantDto> restaurants;

    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder("SelectedItems{");

        if (attractions != null) {
            builder.append("attractions=").append(attractions.toString());
        } else {
            builder.append("attractions=null");
        }

        if (hotels != null) {
            builder.append(", hotels=").append(hotels.toString());
        } else {
            builder.append(", hotels=null");
        }

        if (restaurants != null) {
            builder.append(", restaurants=").append(restaurants.toString());
        } else {
            builder.append(", restaurants=null");
        }

        builder.append("}");

        return builder.toString();
    }
}