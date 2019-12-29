<?php
namespace Nfq;

class NumberFormatter
{
    public function formatNumber(float $number): string
    {
        switch($number) {
            case($number >= 999500 or $number <= -999500):
                $number = number_format($number / 1000000, 2).'M';
                break;
            case(($number >= 99950 and $number < 999500) or ($number > -999500 and $number <= -99950)):
                $number = number_format($number / 1000).'K';
                break;
            case(($number >= 999.995 and $number < 99950) or ($number > -99950 and $number <= -999.995)):
                $number = number_format(round($number), 0, ".", " ");
                break;
            default:
                $number = number_format($number, 2);
                if ((float)$number - (float)number_format($number, 0) === 0.00)
                {
                    $number = number_format($number, 0);
                }
                break;
        }
        return strval($number);
    }
}
