package sky.yp.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import sky.yp.dto.*;
import sky.yp.entity.*;
import sky.yp.repository.*;
import sky.yp.service.PlanSaveService;

@RestController
public class PlanSaveController {
    private final SaveRepository saveRepository;
    private final AccommodationRepository accommodationRepository;
    private final RestaurantRepository restaurantRepository;
    private final TourRepository tourRepository;
    private final TransportationRepository transportationRepository;

    @Autowired
    public PlanSaveController(PlanSaveService planSaveService,
                              SaveRepository saveRepository,
                              AccommodationRepository accommodationRepository,
                              RestaurantRepository restaurantRepository,
                              TourRepository tourRepository,
                              TransportationRepository transportationRepository
    ) {
        this.saveRepository = saveRepository;
        this.accommodationRepository = accommodationRepository;
        this.restaurantRepository = restaurantRepository;
        this.tourRepository = tourRepository;
        this.transportationRepository = transportationRepository;
    }

    @PostMapping("/api/savePlan")
    public void getPlan(@RequestBody SavePlanRequest savePlanRequest) {
        System.out.println(savePlanRequest.toString());

        // 새로운 save(여행 플랜) 엔티티 생성
        SaveEntity save = new SaveEntity();
        save.setUserNo(savePlanRequest.getUserNo());        // 유저번호 저장
        save.setSaveTitle(savePlanRequest.getSaveTitle());
        save.setFirstDate(savePlanRequest.getStartDate());  // 시작일 저장
        save.setEndDate(savePlanRequest.getEndDate());      // 종료일 저장
        save.setFirstPlace(savePlanRequest.getDeparture()); // 출발지 저장
        save.setEndPlace(savePlanRequest.getDestination()); // 목적지 저장
        save = saveRepository.save(save);   // DB에 저장함과 동시에 자동으로 생성된 saveNo를 받아오도록 함


        // HotelDto를 받아와서 Accommodation 엔티티로 매핑하여 저장
        for (HotelDto hotelDto : savePlanRequest.getSelectedItems().getHotels()) {
            AccommodationEntity accommodation = new AccommodationEntity();
            accommodation.setSaveNo(save.getSaveNo());
            accommodation.setAccName(hotelDto.getTitle());
            accommodation.setAccAddress(hotelDto.getAddr1());
            accommodation.setAccImg(hotelDto.getFirstimage2());
            accommodationRepository.save(accommodation);
        }

        // RestaurantDto를 받아와서 Restaurant 엔티티로 매핑하여 저장
        for (RestaurantDto restaurantDto : savePlanRequest.getSelectedItems().getRestaurants()) {
            RestaurantEntity restaurant = new RestaurantEntity();
            restaurant.setSaveNo(save.getSaveNo());
            restaurant.setResName(restaurantDto.getTitle());
            restaurant.setResAddress(restaurantDto.getAddr1());
            restaurant.setResImg(restaurantDto.getFirstimage2());
            restaurantRepository.save(restaurant);
        }

        // AttractionDto를 받아와서 Tour 엔티티로 매핑하여 저장
        for (AttractionDto attractionDto : savePlanRequest.getSelectedItems().getAttractions()) {
            TourEntity tour = new TourEntity();
            tour.setSaveNo(save.getSaveNo());
            tour.setTourName(attractionDto.getTitle());
            tour.setTourAddress(attractionDto.getAddr1());
            tour.setTourImg(attractionDto.getFirstimage2());
            tourRepository.save(tour);
        }

        for (SelectedTrains selectedTrains : savePlanRequest.getSelectedTrains()){
            TransportationEntity transportationEntity = new TransportationEntity();
            transportationEntity.setSaveNo(save.getSaveNo());
            transportationEntity.setTransName(selectedTrains.getTraingradename());
            transportationEntity.setFirstPlace(selectedTrains.getArrplacename());
            transportationEntity.setEndPlace(selectedTrains.getDepplacename());
            transportationEntity.setFirstTime(selectedTrains.getArrplandtime());
            transportationEntity.setEndTime(selectedTrains.getDepplandtime());
            transportationRepository.save(transportationEntity);
        }


    }
}
