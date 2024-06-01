import { CategoryService } from './../category/category.service'
import { CategoryController } from './../category/category.controller'
import { Module } from '@nestjs/common'
import { ProductService } from './product.service'
import { ProductController } from './product.controller'
import { PrismaService } from 'src/prisma.service'

@Module({
	controllers: [ProductController],
	providers: [ProductService, PrismaService, CategoryController],
	exports: [CategoryService]
})
export class ProductModule {}
