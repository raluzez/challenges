<?php

namespace Nfq;

class MoneyFormatter
{
    public function __construct()
    {
        $this->numberFormatter = new NumberFormatter();
    }


    public function formatEur($number): string
    {
        return $this->numberFormatter->formatNumber($number).' €';
    }
    public function formatUsd($number): string
    {
        if ((float)$number < 0)
        {
            return '-$'.substr($this->numberFormatter->formatNumber($number),1);
        }
        else 
        {
            return '$'.$this->numberFormatter->formatNumber($number);
        }
    }
}
