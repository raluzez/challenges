<?php 

namespace Nfq;

class Bedroom extends Room
{
    public function __construct(int $roomNumber, int $price)
    {
        parent::__construct(
            'Gold',
            true,
            true,
            2,
            array('TV', 'air-conditioner', 'refrigerator', 'mini-bar', 'bathtub'),
            $roomNumber,
            $price
        );
    }
}