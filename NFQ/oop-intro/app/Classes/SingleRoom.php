<?php 

namespace Nfq;

class SingleRoom extends Room
{
    public function __construct(int $roomNumber, int $price)
    {
        parent::__construct(
            'Standart',
            true,
            false,
            1,
            array('TV', 'air-conditioner'),
            $roomNumber,
            $price
        );
    }
}