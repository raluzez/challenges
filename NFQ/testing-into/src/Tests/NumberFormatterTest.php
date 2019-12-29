<?php

namespace Nfq\Tests;

use PHPUnit\Framework\TestCase;
use Nfq\NumberFormatter;

class NumberFormatterTest extends TestCase
{
    /**
     * @dataProvider formatNumberProvider
     * @param $actual
     * @param $expected
     */
    public function testFormatNumber(float $actual, string $expected)
    {
        $numberFormatter = new NumberFormatter();
        $this->assertEquals($numberFormatter->formatNumber($actual),$expected);
    }
    public function formatNumberProvider()
    {
        return [
            [1.1, '1.10'],
            [1.01, '1.01'],
            [1, '1'],
            [1.00, '1'],
            [1.004, '1'],
            [-1.1, '-1.10'],
            [-1.01, '-1.01'],
            [-1, '-1'],
            [-1.00, '-1'],
            [-1.004, '-1'],
            [999.99, '999.99'],
            [999.991, '999.99'],
            [999.999, '1 000'],
            [999.96, '999.96'],
            [999.966, '999.97'],
            [-999.99, '-999.99'],
            [-999.991, '-999.99'],
            [-999.999, '-1 000'],
            [-999.96, '-999.96'],
            [-999.966, '-999.97'],
            [99950, '100K'],
            [99949, '99 949'],
            [-99950, '-100K'],
            [-99949, '-99 949'],
            [999500, '1.00M'],
            [999499, '999K'],
            [-999500, '-1.00M'],
            [-999499, '-999K'],
            [2835779, '2.84M'],
            [-2835779, '-2.84M'],
            [535216, '535K'],
            [-535216, '-535K'],
            [27533.78, '27 534'],
            [-27533.78, '-27 534'],
            [533.1, '533.10'],
            [-533.1, '-533.10']
        ];
    }
}
