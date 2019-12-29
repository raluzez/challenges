<?php

namespace Nfq\Tests;

use PHPUnit\Framework\TestCase;
use Nfq\NumberFormatter;
use Nfq\MoneyFormatter;

class MoneyFormatterTest extends TestCase
{

    private $mock;
    private $sut;

    public function setUp(): void
    {
        $this->mock = $this->getNumberFormatterMock();
        $this->sut = new MoneyFormatter($this->mock);
    }
    
    /**
     * @dataProvider eurProvider
     * @param $number
     * @param $formatedNumber
     * @param $expectedEur
     */
    public function testFormatEur(float $number, string $formatedNumber, string $expectedEur)
    {
        $this->mock->method('formatNumber')->with($number)->willReturn($formatedNumber);

        $actual = $this->sut->formatEur($number);

        $this->assertEquals($actual,$expectedEur);
    }

    /**
     * @dataProvider usdProvider
     * @param $number
     * @param $formatedNumber
     * @param $expectedUsd
     */
    public function testFormatUsd(float $number, string $formatedNumber, string $expectedUsd)
    {
        $this->mock->method('formatNumber')->with($number)->willReturn($formatedNumber);

        $actual = $this->sut->formatUsd($number);

        $this->assertEquals($actual,$expectedUsd);
    }

    private function getNumberFormatterMock()
    {
        $mock = $this->getMockBuilder(NumberFormatter::class)
            ->setMethods(['formatNumber'])
            ->getMock();
        return $mock;
    }
    
    public function eurProvider()
    {
        return [
            [1.1, '1.10', '1.10 €'],
            [1.01, '1.01', '1.01 €'],
            [1, '1', '1 €'],
            [1.00, '1', '1 €'],
            [1.004, '1', '1 €'],
            [-1.1, '-1.10', '-1.10 €'],
            [-1.01, '-1.01', '-1.01 €'],
            [-1, '-1', '-1 €'],
            [-1.00, '-1', '-1 €'],
            [-1.004, '-1', '-1 €'],
            [999.99, '999.99', '999.99 €'],
            [999.991, '999.99', '999.99 €'],
            [999.999, '1 000', '1 000 €'],
            [999.96, '999.96', '999.96 €'],
            [999.966, '999.97', '999.97 €'],
            [-999.99, '-999.99', '-999.99 €'],
            [-999.991, '-999.99', '-999.99 €'],
            [-999.999, '-1 000', '-1 000 €'],
            [-999.96, '-999.96', '-999.96 €'],
            [-999.966, '-999.97', '-999.97 €'],
            [99950, '100K', '100K €'],
            [99949, '99 949', '99 949 €'],
            [-99950, '-100K', '-100K €'],
            [-99949, '-99 949', '-99 949 €'],
            [999500, '1.00M', '1.00M €'],
            [999499, '999K', '999K €'],
            [-999500, '-1.00M', '-1.00M €'],
            [-999499, '-999K', '-999K €'],
            [2835779, '2.84M', '2.84M €'],
            [-2835779, '-2.84M', '-2.84M €'],
            [535216, '535K', '535K €'],
            [-535216, '-535K', '-535K €'],
            [27533.78, '27 534', '27 534 €'],
            [-27533.78, '-27 534', '-27 534 €'],
            [533.1, '533.10', '533.10 €'],
            [-533.1, '-533.10', '-533.10 €']
        ];
    }

    public function usdProvider()
    {
        return [
            [1.1, '1.10', '$1.10'],
            [1.01, '1.01', '$1.01'],
            [1, '1', '$1'],
            [1.00, '1', '$1'],
            [1.004, '1', '$1'],
            [-1.1, '-1.10', '-$1.10'],
            [-1.01, '-1.01', '-$1.01'],
            [-1, '-1', '-$1'],
            [-1.00, '-1', '-$1'],
            [-1.004, '-1', '-$1'],
            [999.99, '999.99', '$999.99'],
            [999.991, '999.99', '$999.99'],
            [999.999, '1 000', '$1 000'],
            [999.96, '999.96', '$999.96'],
            [999.966, '999.97', '$999.97'],
            [-999.99, '-999.99', '-$999.99'],
            [-999.991, '-999.99', '-$999.99'],
            [-999.999, '-1 000', '-$1 000'],
            [-999.96, '-999.96', '-$999.96'],
            [-999.966, '-999.97', '-$999.97'],
            [99950, '100K', '$100K'],
            [99949, '99 949', '$99 949'],
            [-99950, '-100K', '-$100K'],
            [-99949, '-99 949', '-$99 949'],
            [999500, '1.00M', '$1.00M'],
            [999499, '999K', '$999K'],
            [-999500, '-1.00M', '-$1.00M'],
            [-999499, '-999K', '-$999K'],
            [2835779, '2.84M', '$2.84M'],
            [-2835779, '-2.84M', '-$2.84M'],
            [535216, '535K', '$535K'],
            [-535216, '-535K', '-$535K'],
            [27533.78, '27 534', '$27 534'],
            [-27533.78, '-27 534', '-$27 534'],
            [533.1, '533.10', '$533.10'],
            [-533.1, '-533.10', '-$533.10']
        ];
    }
}
