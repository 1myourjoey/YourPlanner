package sky.yp.dto;


import lombok.*;

import java.util.List;
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class SelectedItems {
    // JSON으로 받아온 여행 정보를 저장하는 객체, 각 항목마다 배열로 값을 받아옴
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