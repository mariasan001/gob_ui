import type { ChartCardTone } from '@mariasan001/ui-wc';
import type { EChartsOption } from 'echarts';

import type { ChartKind } from './chart-data';

export type GobChartPalette = {
  accent: string;
  mid: string;
  soft: string;
  softStrong: string;
  muted: string;
  title: string;
  track: string;
  card: string;
  series: [string, string, string];
};

export function paletteForTone(tone: ChartCardTone): GobChartPalette {
  switch (tone) {
    case 'accent':
      return {
        accent: '#BC945A',
        mid: '#D9BE8E',
        soft: 'rgba(188, 148, 90, 0.18)',
        softStrong: 'rgba(188, 148, 90, 0.42)',
        muted: '#8a8278',
        title: '#181511',
        track: 'rgba(24, 21, 17, 0.06)',
        card: '#ffffff',
        series: ['#BC945A', '#9F2141', '#5C5348'],
      };
    case 'dark':
      return {
        accent: '#2A2520',
        mid: '#5C5348',
        soft: 'rgba(24, 21, 17, 0.1)',
        softStrong: 'rgba(24, 21, 17, 0.28)',
        muted: '#8a8278',
        title: '#181511',
        track: 'rgba(24, 21, 17, 0.06)',
        card: '#ffffff',
        series: ['#181511', '#9F2141', '#BC945A'],
      };
    case 'neutral':
      return {
        accent: '#6B655C',
        mid: '#A39B90',
        soft: 'rgba(24, 21, 17, 0.08)',
        softStrong: 'rgba(24, 21, 17, 0.2)',
        muted: '#8a8278',
        title: '#181511',
        track: 'rgba(24, 21, 17, 0.06)',
        card: '#ffffff',
        series: ['#6B655C', '#9F2141', '#BC945A'],
      };
    case 'soft':
      return {
        accent: '#A67C52',
        mid: '#CDB892',
        soft: 'rgba(231, 215, 189, 0.7)',
        softStrong: 'rgba(166, 124, 82, 0.35)',
        muted: '#8a8278',
        title: '#181511',
        track: 'rgba(24, 21, 17, 0.06)',
        card: '#ffffff',
        series: ['#A67C52', '#9F2141', '#6B655C'],
      };
    default:
      return {
        accent: '#9F2141',
        mid: '#C45A73',
        soft: 'rgba(159, 33, 65, 0.14)',
        softStrong: 'rgba(159, 33, 65, 0.38)',
        muted: '#8a8278',
        title: '#181511',
        track: 'rgba(24, 21, 17, 0.06)',
        card: '#ffffff',
        series: ['#9F2141', '#BC945A', '#5C5348'],
      };
  }
}

function hexToRgba(hex: string, alpha: number): string {
  const clean = hex.replace('#', '');
  const full =
    clean.length === 3
      ? clean
          .split('')
          .map((ch) => ch + ch)
          .join('')
      : clean;
  const n = Number.parseInt(full, 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function linear(
  c0: string,
  c1: string,
  vertical = true,
): {
  type: 'linear';
  x: number;
  y: number;
  x2: number;
  y2: number;
  colorStops: { offset: number; color: string }[];
} {
  return {
    type: 'linear',
    x: 0,
    y: 0,
    x2: vertical ? 0 : 1,
    y2: vertical ? 1 : 0,
    colorStops: [
      { offset: 0, color: c0 },
      { offset: 1, color: c1 },
    ],
  };
}

const font = 'Raleway, Gotham, sans-serif';

function modernTooltip() {
  return {
    backgroundColor: 'rgba(24, 21, 17, 0.92)',
    borderWidth: 0,
    padding: [10, 14] as [number, number],
    textStyle: {
      color: '#fff',
      fontFamily: font,
      fontSize: 12,
      fontWeight: 600 as const,
    },
    extraCssText:
      'border-radius:12px;box-shadow:0 12px 28px rgba(24,21,17,0.22);',
  };
}

function axisCategory(p: GobChartPalette, data: string[]) {
  return {
    type: 'category' as const,
    data,
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: {
      color: p.muted,
      fontFamily: font,
      fontSize: 11,
      fontWeight: 600 as const,
      margin: 12,
    },
  };
}

function axisValue(p: GobChartPalette) {
  return {
    type: 'value' as const,
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: {
      color: p.muted,
      fontFamily: font,
      fontSize: 11,
      fontWeight: 500 as const,
    },
    splitLine: {
      lineStyle: {
        color: p.track,
        type: [4, 6] as number[],
        width: 1,
      },
    },
  };
}

function anim() {
  return {
    animation: true,
    animationDuration: 900,
    animationEasing: 'cubicOut' as const,
    animationDurationUpdate: 500,
  };
}

export function buildChartOption(
  kind: ChartKind,
  palette: GobChartPalette,
): EChartsOption {
  const [a, b, c] = palette.series;
  const tip = modernTooltip();

  if (kind === 'area') {
    return {
      ...anim(),
      color: [a, b, c],
      grid: { left: 4, right: 8, top: 28, bottom: 4, containLabel: true },
      tooltip: {
        trigger: 'axis',
        ...tip,
        axisPointer: {
          type: 'line',
          lineStyle: { color: hexToRgba(a, 0.35), width: 1.5, type: 'dashed' },
        },
      },
      xAxis: {
        ...axisCategory(palette, ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun']),
        boundaryGap: false,
      },
      yAxis: axisValue(palette),
      series: [
        {
          name: 'Presencial',
          type: 'line',
          stack: 'total',
          smooth: 0.55,
          showSymbol: false,
          lineStyle: { width: 0 },
          areaStyle: {
            color: linear(hexToRgba(a, 0.85), hexToRgba(a, 0.25)),
          },
          emphasis: { focus: 'series' },
          data: [42, 48, 51, 46, 58, 62],
        },
        {
          name: 'Digital',
          type: 'line',
          stack: 'total',
          smooth: 0.55,
          showSymbol: false,
          lineStyle: { width: 0 },
          areaStyle: {
            color: linear(hexToRgba(b, 0.8), hexToRgba(b, 0.2)),
          },
          emphasis: { focus: 'series' },
          data: [28, 34, 39, 44, 49, 55],
        },
        {
          name: 'Telefonico',
          type: 'line',
          stack: 'total',
          smooth: 0.55,
          showSymbol: false,
          lineStyle: { width: 0 },
          areaStyle: {
            color: linear(hexToRgba(c, 0.7), hexToRgba(c, 0.15)),
          },
          emphasis: { focus: 'series' },
          data: [18, 16, 20, 17, 15, 19],
        },
      ],
    };
  }

  if (kind === 'line') {
    return {
      ...anim(),
      color: [a, b],
      grid: { left: 4, right: 10, top: 28, bottom: 4, containLabel: true },
      tooltip: {
        trigger: 'axis',
        ...tip,
        axisPointer: {
          type: 'cross',
          crossStyle: { color: hexToRgba(a, 0.35) },
          label: {
            backgroundColor: palette.title,
            borderRadius: 6,
            fontFamily: font,
          },
        },
      },
      xAxis: axisCategory(palette, [
        'S1',
        'S2',
        'S3',
        'S4',
        'S5',
        'S6',
        'S7',
        'S8',
      ]),
      yAxis: axisValue(palette),
      series: [
        {
          name: 'Real',
          type: 'line',
          smooth: 0.55,
          symbol: 'circle',
          symbolSize: 9,
          showSymbol: true,
          lineStyle: {
            width: 3.5,
            shadowColor: hexToRgba(a, 0.35),
            shadowBlur: 8,
            shadowOffsetY: 4,
          },
          itemStyle: {
            color: a,
            borderColor: '#fff',
            borderWidth: 3,
            shadowColor: hexToRgba(a, 0.35),
            shadowBlur: 6,
          },
          areaStyle: {
            color: linear(hexToRgba(a, 0.32), 'rgba(255,255,255,0)'),
          },
          emphasis: {
            scale: 1.25,
            focus: 'series',
          },
          data: [120, 132, 128, 145, 160, 158, 172, 186],
          markPoint: {
            symbol: 'pin',
            symbolSize: 42,
            label: {
              color: '#fff',
              fontWeight: 700,
              fontFamily: font,
              fontSize: 11,
            },
            itemStyle: { color: a },
            data: [{ type: 'max', name: 'Max' }],
          },
        },
        {
          name: 'Meta',
          type: 'line',
          smooth: 0.4,
          symbol: 'none',
          lineStyle: {
            width: 2.5,
            type: [6, 6],
            color: hexToRgba(b, 0.85),
          },
          data: [130, 130, 140, 140, 155, 155, 170, 170],
        },
      ],
    };
  }

  if (kind === 'donut') {
    const total = 42 + 33 + 25;
    return {
      ...anim(),
      color: [a, b, c],
      tooltip: {
        trigger: 'item',
        ...tip,
        formatter: '{b}: <b>{c}</b> ({d}%)',
      },
      graphic: [
        {
          type: 'group',
          left: 'center',
          top: 'center',
          children: [
            {
              type: 'text',
              style: {
                text: String(total),
                fill: palette.title,
                font: `800 28px ${font}`,
                align: 'center',
                verticalAlign: 'middle',
                y: -8,
              },
            },
            {
              type: 'text',
              style: {
                text: 'TOTAL',
                fill: palette.muted,
                font: `700 10px ${font}`,
                align: 'center',
                verticalAlign: 'middle',
                y: 16,
              },
            },
          ],
        },
      ],
      series: [
        {
          type: 'pie',
          radius: ['0%', '48%'],
          center: ['50%', '52%'],
          silent: true,
          label: { show: false },
          data: [
            {
              value: 1,
              itemStyle: {
                color: palette.track,
              },
            },
          ],
          z: 1,
        },
        {
          type: 'pie',
          radius: ['56%', '78%'],
          center: ['50%', '52%'],
          padAngle: 4,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 3,
            shadowBlur: 10,
            shadowColor: 'rgba(24,21,17,0.12)',
          },
          label: {
            show: true,
            position: 'outside',
            formatter: '{d}%',
            color: palette.muted,
            fontFamily: font,
            fontWeight: 700,
            fontSize: 11,
          },
          labelLine: {
            length: 10,
            length2: 8,
            lineStyle: { color: hexToRgba(palette.title, 0.18) },
          },
          emphasis: {
            scale: true,
            scaleSize: 8,
            itemStyle: {
              shadowBlur: 18,
              shadowColor: 'rgba(24,21,17,0.22)',
            },
          },
          data: [
            { value: 42, name: 'Norte' },
            { value: 33, name: 'Centro' },
            { value: 25, name: 'Sur' },
          ],
          z: 2,
        },
      ],
    };
  }

  if (kind === 'radar') {
    return {
      ...anim(),
      color: [a, b],
      tooltip: { ...tip, trigger: 'item' },
      radar: {
        indicator: [
          { name: 'Agilidad', max: 100 },
          { name: 'Claridad', max: 100 },
          { name: 'Acceso', max: 100 },
          { name: 'Soporte', max: 100 },
          { name: 'Confianza', max: 100 },
        ],
        center: ['50%', '52%'],
        radius: '68%',
        splitNumber: 4,
        axisName: {
          color: palette.muted,
          fontSize: 11,
          fontWeight: 700,
          fontFamily: font,
          padding: [3, 0],
        },
        splitLine: {
          lineStyle: { color: [palette.track, palette.track] },
        },
        splitArea: {
          show: true,
          areaStyle: {
            color: [
              'rgba(255,255,255,0)',
              hexToRgba(a, 0.04),
              'rgba(255,255,255,0)',
              hexToRgba(a, 0.07),
            ],
          },
        },
        axisLine: { lineStyle: { color: hexToRgba(palette.title, 0.1) } },
      },
      series: [
        {
          type: 'radar',
          symbol: 'circle',
          symbolSize: 7,
          data: [
            {
              value: [86, 78, 91, 74, 88],
              name: 'Actual',
              lineStyle: {
                width: 2.5,
                shadowBlur: 8,
                shadowColor: hexToRgba(a, 0.35),
              },
              itemStyle: {
                color: a,
                borderColor: '#fff',
                borderWidth: 2,
              },
              areaStyle: {
                color: linear(hexToRgba(a, 0.45), hexToRgba(a, 0.08)),
              },
            },
            {
              value: [70, 72, 68, 80, 75],
              name: 'Meta',
              lineStyle: { width: 2, type: [5, 5], color: b },
              itemStyle: { color: b, borderColor: '#fff', borderWidth: 2 },
              areaStyle: { color: hexToRgba(b, 0.12) },
            },
          ],
        },
      ],
    };
  }

  if (kind === 'heatmap') {
    const hours = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie'];
    const slots = ['08h', '10h', '12h', '14h', '16h'];
    const data: [number, number, number][] = [];
    const values = [
      [2, 4, 6, 3, 1],
      [5, 8, 9, 7, 4],
      [3, 6, 10, 8, 5],
      [4, 7, 8, 9, 6],
      [1, 3, 5, 4, 2],
    ];
    for (let y = 0; y < slots.length; y += 1) {
      for (let x = 0; x < hours.length; x += 1) {
        data.push([x, y, values[y][x]]);
      }
    }
    return {
      ...anim(),
      grid: { left: 42, right: 10, top: 12, bottom: 32 },
      tooltip: {
        ...tip,
        position: 'top',
        formatter: (params: unknown) => {
          const p = params as { data?: [number, number, number] };
          const d = p.data;
          if (!d) return '';
          return `${hours[d[0]]} · ${slots[d[1]]}<br/><b>${d[2]}</b> tickets`;
        },
      },
      xAxis: {
        ...axisCategory(palette, hours),
        splitArea: { show: false },
        position: 'bottom',
      },
      yAxis: {
        type: 'category',
        data: slots,
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          color: palette.muted,
          fontFamily: font,
          fontSize: 11,
          fontWeight: 600,
        },
        splitArea: { show: false },
      },
      visualMap: {
        show: true,
        orient: 'horizontal',
        left: 'center',
        bottom: 0,
        min: 0,
        max: 10,
        itemWidth: 12,
        itemHeight: 80,
        textStyle: {
          color: palette.muted,
          fontFamily: font,
          fontSize: 10,
          fontWeight: 600,
        },
        inRange: {
          color: [
            hexToRgba(a, 0.08),
            hexToRgba(a, 0.28),
            hexToRgba(a, 0.55),
            a,
          ],
        },
      },
      series: [
        {
          type: 'heatmap',
          data,
          label: {
            show: true,
            color: palette.title,
            fontFamily: font,
            fontWeight: 700,
            fontSize: 11,
          },
          itemStyle: {
            borderRadius: 8,
            borderColor: '#fff',
            borderWidth: 4,
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 12,
              shadowColor: 'rgba(24,21,17,0.22)',
              borderWidth: 4,
            },
          },
        },
      ],
    };
  }

  if (kind === 'gauge') {
    return {
      ...anim(),
      series: [
        {
          type: 'gauge',
          startAngle: 210,
          endAngle: -30,
          min: 0,
          max: 100,
          radius: '92%',
          center: ['50%', '56%'],
          axisLine: {
            roundCap: true,
            lineStyle: {
              width: 18,
              color: [
                [0.6, hexToRgba(a, 0.18)],
                [0.8, hexToRgba(b, 0.35)],
                [1, hexToRgba(a, 0.12)],
              ],
            },
          },
          progress: {
            show: true,
            roundCap: true,
            width: 18,
            itemStyle: {
              color: linear(a, palette.mid, false),
              shadowColor: hexToRgba(a, 0.35),
              shadowBlur: 10,
            },
          },
          pointer: { show: false },
          axisTick: { show: false },
          splitLine: { show: false },
          axisLabel: { show: false },
          anchor: { show: false },
          title: {
            show: true,
            offsetCenter: [0, '28%'],
            color: palette.muted,
            fontFamily: font,
            fontSize: 11,
            fontWeight: 700,
          },
          detail: {
            valueAnimation: true,
            fontSize: 34,
            fontWeight: 800,
            fontFamily: font,
            color: palette.title,
            offsetCenter: [0, '0%'],
            formatter: '{value}%',
          },
          data: [{ value: 74, name: 'CUMPLIMIENTO' }],
        },
      ],
    };
  }

  // bars — columnas premium con pista de fondo + highlight del max
  const barData = [420, 532, 401, 634, 490, 580, 520];
  return {
    ...anim(),
    color: [a],
    grid: { left: 4, right: 8, top: 28, bottom: 4, containLabel: true },
    tooltip: {
      trigger: 'axis',
      ...tip,
      axisPointer: {
        type: 'shadow',
        shadowStyle: { color: hexToRgba(a, 0.08) },
      },
    },
    xAxis: axisCategory(palette, [
      'Ene',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun',
      'Jul',
    ]),
    yAxis: axisValue(palette),
    series: [
      {
        type: 'bar',
        barWidth: '42%',
        showBackground: true,
        backgroundStyle: {
          color: palette.track,
          borderRadius: [12, 12, 6, 6],
        },
        itemStyle: {
          borderRadius: [12, 12, 6, 6],
          color: linear(a, palette.mid),
          shadowColor: hexToRgba(a, 0.28),
          shadowBlur: 10,
          shadowOffsetY: 4,
        },
        emphasis: {
          itemStyle: {
            color: linear(palette.mid, a),
            shadowBlur: 16,
            shadowColor: hexToRgba(a, 0.4),
          },
        },
        data: barData.map((value) => {
          const isMax = value === Math.max(...barData);
          if (!isMax) return value;
          return {
            value,
            itemStyle: {
              borderRadius: [12, 12, 6, 6],
              color: linear(a, hexToRgba(a, 0.55)),
              shadowColor: hexToRgba(a, 0.4),
              shadowBlur: 14,
              shadowOffsetY: 5,
            },
            label: {
              show: true,
              position: 'top' as const,
              distance: 6,
              color: a,
              fontFamily: font,
              fontWeight: 800 as const,
              fontSize: 11,
              formatter: '{c}',
            },
          };
        }),
      },
    ],
  };
}
