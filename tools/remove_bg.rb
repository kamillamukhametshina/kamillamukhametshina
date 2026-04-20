#!/usr/bin/env ruby
# frozen_string_literal: true

require 'chunky_png'

abort 'Usage: ruby remove_bg.rb <input.png> <output.png>' unless ARGV.length == 2

input_path = ARGV[0]
output_path = ARGV[1]

img = ChunkyPNG::Image.from_file(input_path)
w = img.width
h = img.height

sample = 8
corners = [
  [0, 0],
  [w - sample, 0],
  [0, h - sample],
  [w - sample, h - sample]
]

sum_r = 0.0
sum_g = 0.0
sum_b = 0.0
count = 0.0

corners.each do |sx, sy|
  (sy...(sy + sample)).each do |y|
    (sx...(sx + sample)).each do |x|
      px = img[x, y]
      sum_r += ChunkyPNG::Color.r(px)
      sum_g += ChunkyPNG::Color.g(px)
      sum_b += ChunkyPNG::Color.b(px)
      count += 1.0
    end
  end
end

bg_r = sum_r / count
bg_g = sum_g / count
bg_b = sum_b / count

hard = 24.0
soft = 58.0

h.times do |y|
  w.times do |x|
    px = img[x, y]
    r = ChunkyPNG::Color.r(px)
    g = ChunkyPNG::Color.g(px)
    b = ChunkyPNG::Color.b(px)

    dr = r - bg_r
    dg = g - bg_g
    db = b - bg_b
    dist = Math.sqrt((dr * dr) + (dg * dg) + (db * db))
    chroma = [r, g, b].max - [r, g, b].min

    alpha =
      if dist <= hard && chroma < 24
        0
      elsif dist < soft && chroma < 34
        ratio = (dist - hard) / (soft - hard)
        (ratio * 255.0).round
      else
        255
      end

    img[x, y] = ChunkyPNG::Color.rgba(r, g, b, [[alpha, 0].max, 255].min)
  end
end

img.save(output_path, interlace: false)

